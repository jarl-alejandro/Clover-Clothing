const INITIAL_STATE = {
    sections: [
        {
            title: 'Hats',
            imageUrl: 'https://images.pexels.com/photos/823723/pexels-photo-823723.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            id: 1,
            linkUrl: 'shop/hats'
        },
        {
            title: 'Jackets',
            imageUrl: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            id: 2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'Sneakers',
            imageUrl: 'https://images.pexels.com/photos/1661470/pexels-photo-1661470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            id: 3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'Shirts',
            imageUrl: 'https://images.pexels.com/photos/69212/pexels-photo-69212.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            id: 4,
            linkUrl: 'shop/shirts'
        },
        {
            title: 'Jeans',
            imageUrl: 'https://images.pexels.com/photos/1346187/pexels-photo-1346187.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            id: 5,
            linkUrl: 'shop/jeans'
        },
        {
            title: 'T-Shirts',
            imageUrl: 'https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            id: 6,
            linkUrl: 'shop/tshirts'
        },
    ]   
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;