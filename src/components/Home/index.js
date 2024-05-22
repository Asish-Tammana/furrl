import React, { useState, useEffect, useRef } from 'react';
import BannerSection from '../BannerSection';
import './index.css'
import FiltersSection from '../FilterSection';
import ProductsSection from '../ProductsSection';
import getData from '../../APIs/fetch';
import Loader from '../Loader';

const Home = () => {
    const [productsList, setProductsList] = useState([]);
    const [totalProducts, setProductsCount] = useState(0)
    const [filtersList, setFilterList] = useState([])
    const [vibeDetails, setVibeDetails] = useState({})
    const [pageNumber, setPageNumber] = useState(1);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    const initialRender = useRef(true);

    const getProducts = async () => {

        setLoading(true)

        const url = "https://api.furrl.in/api/v2/listing/getListingProducts";
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "input": {
                    "page": pageNumber,
                    "pageSize": 10,
                    "filters": [],
                    "id": "#HomeHunts",
                    "entity": "vibe"
                }
            })
        };

        try {
            const responseData = await getData(url, options);
            const { data: { getListingProducts: { totalProducts } } } = responseData
            setProductsCount(totalProducts)
            const { data: { getListingProducts: { products } } } = responseData;
            setProductsList(prevState => [...prevState, ...products]);
            setLoading(false)

        } catch (error) {
            setError(error);
        }
    };

    const getVibe = async () => {
        const url = "https://api.furrl.in/api/v2/listing/getVibeByName"
        const options = {
            "method": 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": "#HomeHunts"
            })

        }

        try {
            const responseData = await getData(url, options)
            const { data: { getVibeByName } } = responseData
            setVibeDetails(getVibeByName)
        } catch (error) {
            setError(error)
        }
    }

    const getFilters = async () => {
        const url = "https://api.furrl.in/api/v2/listing/getListingFilters"
        const options = {
            "method": 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id": "#HomeHunts",
                "entity": "vibe"
            })

        }

        try {
            const responseData = await getData(url, options)
            const { data: { getListingFilters: { easyFilters } } } = responseData
            setFilterList(easyFilters)
        } catch (error) {
            setError(error)
        }
    }

    const handleInfiniteScroll = async () => {
        try {
            if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
                setPageNumber(prev => prev + 1)
            }

        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        if (initialRender.current) {
            getVibe()
            getFilters()
            window.addEventListener('scroll', handleInfiniteScroll);
            initialRender.current = false;
        }

        return () => {
            window.removeEventListener('scroll', handleInfiniteScroll);
        };
    }, [])


    useEffect(() => {
        getProducts()
    }, [pageNumber]);

    return (
        <>
            <BannerSection vibeDetails={vibeDetails} />
            <div className='bottom-container'>
                <p className='products-count'>{totalProducts} Products</p>
                <FiltersSection filtersList={filtersList} />
                <ProductsSection productsList={productsList} />
                {loading && <Loader />}
            </div>
        </>
    );
};

export default Home;
