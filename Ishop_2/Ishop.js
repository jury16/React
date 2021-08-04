var Ishop = React.createClass({

    displayName: 'IShop',
    getDefaultProps: function() {
        return {
            shopName: "Shop name not found",
            cars: [{ code: 0, brand: 'not found', price: 'not found', url: 'not found', count: 'not found' }]
        }
    },
    propTypes: {
        shopName: React.PropTypes.string,
        cars: React.PropTypes.array,
    },
    render: function() {

        console.log(this.cars);
        const headTable = ["brand", "code", "picture", "quantity", "control"].map((item) => {
            return React.DOM.td({ key: item, className: 'IshopTableHead' }, item);
        });

        return React.DOM.table({ className: 'IshopFrame' },
            React.DOM.caption({ className: 'IshopName' }, this.props.shopName),
            React.DOM.thead({ className: 'IshopTableHead' },
                React.DOM.tr({}, headTable)),
            React.createElement(Product, { cars: this.props.cars }),
        )
    },
});