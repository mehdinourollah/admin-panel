import React, { useState, useEffect } from 'react';
import { getRecipes } from '../../services';
import { Table, Pagination } from 'antd';

export const Recipes = () => {
    const [recipeResponse, setRecipeResponse] = useState(null);
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(null);
    const [current, setCurrent] = useState(1);
    const pageSize = 10;
    const [datasource, setDatasource] = useState([]);
    const getData = async () => {
        try {

            let resp = (await getRecipes(current - 1, pageSize))
            setRecipeResponse(resp);
            setRecipes(resp.data);
            setDatasource(resp.data?.map((recipe, index) => {
                return {
                    key: index + 1,
                    index: index + 1,
                    name: recipe.name,
                }
            }))
        } catch (err) { console.log({ err }) }




    };

    useEffect(async () => {
        await getData();
    }, [current])

    useEffect(async () => {
        setIsLoading(true);
        await getData();
        setIsLoading(false);
    }, []);

    const columns = [
        {
            title: 'index',
            dataIndex: 'index',
            key: 'index',
        },
        {
            title: 'name',
            dataIndex: 'name',
            key: 'name',
        },

    ];

    return (
        <>
            {isLoading ?
                <div>Loading...</div>
                :
                <>
                    <>
                        <Pagination
                            total={recipeResponse?.total_number}
                            current={current}
                            onChange={setCurrent}
                            pageSize={pageSize}
                        />
                        {datasource.length && <Table style={{ height: '100vh' }} columns={columns} dataSource={datasource} pagination={false} />}
                    </>
                </>
            }
        </>
    );
};
