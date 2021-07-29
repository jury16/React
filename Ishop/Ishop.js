var Ishop = React.createClass({

    displayName: 'IShop',
    getDefaultProps: function() {
        return {
            shopName: "Shop name not found",
            cars: [{ code: 0, brand: 'not found', price: 'not found', url: 'not found', count: 'not found' }]
        }
    },
    render: function() {
        var carsArr = this.props.cars.map((item) => {
            return React.DOM.tr({ key: item.code, className: 'IshopFrame' },
                React.DOM.td({ className: 'IshopText' }, item.brand),
                React.DOM.td({ className: 'IshopText _number' }, item.code),
                React.DOM.td({ className: 'IshopText' }, React.DOM.img({ className: 'IshopImg', src: item.url, alt: `${item.brand}` })),
                React.DOM.td({ className: 'IshopText _number' }, item.count));
        });
        const headTable = ["brand", "code", "picture", "quantity"].map((item) => {
            return React.DOM.td({ key: item, className: 'IshopTableHead' }, item);
        })
        console.log(carsArr);
        return React.DOM.table({ className: 'IshopFrame' },
            React.DOM.caption({ className: 'IshopName' }, this.props.shopName),
            React.DOM.thead({ className: 'IshopTableHead' },
                React.DOM.tr({}, headTable)),
            React.DOM.tbody({ className: '' }, carsArr))
    },
});