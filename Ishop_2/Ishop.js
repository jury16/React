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
    getInitialState: function() {
        return {
            aRR: this.props.cars.slice(), //create array to modify
        }
    },

    checkedItem: function(i) {
        this.setState(({ id: i }));
    },

    deleteItem: function(i) {
        this.state.aRR = this.state.aRR.filter(element => element.code != i);
    },
    render: function() {
        const headTable = ["brand", "code", "picture", "quantity", "control"].map((item) => {
            return React.DOM.td({ key: item, className: 'IshopTableHead' }, item);
        });

        return React.DOM.table({ className: 'IshopFrame' },
            React.DOM.caption({ className: 'IshopName' }, this.props.shopName),
            React.DOM.thead({ className: 'IshopTableHead' },
                React.DOM.tr({}, headTable)),
            React.DOM.tbody({ className: '' },
                this.state.aRR.map((item) => React.createElement(Product, { item: item, key: item.code, id: this.state.id, cbCheckedItem: this.checkedItem, cbDeleteItem: this.deleteItem, }))),

        )
    },
});