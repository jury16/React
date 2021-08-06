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
            selecteId: 0,
        }
    },

    checkedItem: function(sectedCode) {
        this.setState(({ selecteId: sectedCode }));
    },

    deleteItem: function(deleteId) {
        this.setState(({ aRR: this.state.aRR.filter(element => element.code != deleteId) }));
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
                this.state.aRR.map((item) => React.createElement(Product, { item: item, key: item.code, selecteId: this.state.selecteId, cbCheckedItem: this.checkedItem, cbDeleteItem: this.deleteItem, }))),

        )
    },
});