import React, { ChangeEvent } from 'react';

interface SearchBoxProps {
  searchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ searchChange }) => {   
    return(
        <div>
            <input   
                style={{height:'50px',
                width: '50vh',
                marginTop:'20px',
                textAlign:'center',
                fontSize:"20px",}}              
                type="search" 
                placeholder="type anime title"                
                onChange={searchChange}
            />
        </div>        
    );
}

export default SearchBox;