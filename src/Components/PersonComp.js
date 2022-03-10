import Data from '../Static_files/data';

import React, { useState, useEffect } from 'react';

const PersonComp = () => {
    const [persondata, setPersonData] = useState(Data.data);
    const [filterData, setFilterData] = useState(Data.data);
    // const [filters, setFilters] = useState([]);
    const [filters, setFilters] = useState({
        gender: [],
        blood_group: [],
    });
    // console.log({ persondata, filterData, filters });
    console.log('Filters array => ', filters);

    const filterUserData = () => {
        // if () return;
        if (filters.includes('All') || filters.length === 0)
            return setFilterData((prevState) => persondata);

        setFilterData((prevState) =>
            persondata.filter((user) => {
                if (
                    filters.gender.includes(user.gender) ||
                    filters.blood_group.includes(user.blood_group)
                )
                    return user;
            })
        );
        // setFilterData((prevState) =>
        //     persondata.filter(
        //         (user) => filters.includes(user.gender) && filters.includes(user.blood_group)
        //     )
        // );

        // setFilterData((prevState) =>
        //     persondata.filter((user) => filters.includes(user.blood_group))
        // );
        // this.setState({
        //     ...this.state,
        //     filterData: this.state.persondata.filter((user) =>
        //         this.state.filters.includes(user.gender)
        //     ),
        // });
    };

    const updatefilter = (event, filter) => {
        setFilters((prevState) =>
            event.target.checked
                ? [...filters, filter]
                : filters.filter((filterItem) => filterItem !== filter)
        );
        // this.setState({
        //     ...this.state,
        //     filters: event.target.checked
        //         ? [...this.state.filters, filter]
        //         : this.state.filters.filter((filterItem) => filterItem !== filter),
        // });
    };

    useEffect(() => {
        filterUserData();
    }, [filters]);

    return (
        <div>
            <div>
                <div className='form-check'>
                    <input
                        className='form-check-input'
                        type='checkbox'
                        value='All'
                        id='defaultCheck1'
                        onChange={(event) => updatefilter(event, 'All')}
                    />
                    <label className='form-check-label' htmlFor='defaultCheck1'>
                        All
                    </label>
                </div>

                <div className='form-check'>
                    <input
                        className='form-check-input'
                        type='checkbox'
                        value='male'
                        id='defaultCheck2'
                        onChange={(event) => updatefilter(event, 'Male')}
                    />
                    <label className='form-check-label' htmlFor='defaultCheck2'>
                        Male
                    </label>
                </div>
                <div className='form-check'>
                    <input
                        className='form-check-input'
                        type='checkbox'
                        value='female'
                        id='defaultCheck3'
                        onChange={(event) => updatefilter(event, 'Female')}
                    />
                    <label className='form-check-label' htmlFor='defaultCheck3'>
                        Female
                    </label>
                </div>

                {/* ,MERA CODE */}

                <div className='form-check'>
                    <input
                        className='form-check-input'
                        type='checkbox'
                        value='a'
                        id='defaultCheck4'
                        onChange={(event) => updatefilter(event, 'A')}
                    />
                    <label className='form-check-label' htmlFor='defaultCheck4'>
                        A
                    </label>
                </div>

                <div className='form-check'>
                    <input
                        className='form-check-input'
                        type='checkbox'
                        value='b'
                        id='defaultCheck5'
                        onChange={(event) => updatefilter(event, 'B')}
                    />
                    <label className='form-check-label' htmlFor='defaultCheck5'>
                        B
                    </label>
                </div>

                <div className='form-check'>
                    <input
                        className='form-check-input'
                        type='checkbox'
                        value='c'
                        id='defaultCheck6'
                        onChange={(event) => updatefilter(event, 'C')}
                    />
                    <label className='form-check-label' htmlFor='defaultCheck6'>
                        C
                    </label>
                </div>
                <div className='form-check'>
                    <input
                        className='form-check-input'
                        type='checkbox'
                        value='d'
                        id='defaultCheck7'
                        onChange={(event) => updatefilter(event, 'D')}
                    />
                    <label className='form-check-label' htmlFor='defaultCheck7'>
                        D
                    </label>
                </div>
            </div>
            <div>
                <h2>Total: {filterData.length}</h2>
            </div>
            <div className='container'>
                <div className='row'>
                    {filterData?.map((data) => (
                        <div className='col-md-4' key={data.id}>
                            <div className='card mt-3'>
                                <div className='card-header bg-dark text-white'>
                                    <h3>Person Datails</h3>
                                </div>

                                <div className='card-body'>
                                    <h5>ID: {data.id}</h5>
                                    <h5>Name: {data.first_name}</h5>
                                    <h5>Email: {data.email_id}</h5>
                                    <h5>Gender: {data.gender}</h5>
                                    <h5>Blood_Group:{data.blood_group}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PersonComp;
