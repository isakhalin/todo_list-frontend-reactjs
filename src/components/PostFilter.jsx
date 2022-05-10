import React, {useMemo, useState} from 'react';
import MyInput from "./UI/inputs/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {



    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                type="text"
                placeholder="Поиск по названию"
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                options={
                    [
                        {value: 'title', name: 'По названию'},
                        {value: 'body', name: 'По описанию'},
                        {value: 'value3', name: 'По дате'},
                    ]
                }
                defaultValue='Сортировка по'
            />
        </div>
    );
};

export default PostFilter;