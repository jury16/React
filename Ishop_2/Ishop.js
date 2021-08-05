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
            id: 0,
            idDel: 0,
            chekedItem: false,

        }
    },
    checkedItem: function(i, checkedItem) {
        this.setState(({ checkedItem: !checkedItem }));
        this.setState(({ id: i }));
    },

    deleteItem: function(i) {
        this.setState(({ idDel: i }));
    },
    render: function() {

        this.props.cars.forEach((element, index, arr) => {
            if (element.code == this.state.idDel) {
                arr.splice(index, 1);
            }
        });

        const headTable = ["brand", "code", "picture", "quantity", "control"].map((item) => {
            return React.DOM.td({ key: item, className: 'IshopTableHead' }, item);
        });

        return React.DOM.table({ className: 'IshopFrame' },
            React.DOM.caption({ className: 'IshopName' }, this.props.shopName),
            React.DOM.thead({ className: 'IshopTableHead' },
                React.DOM.tr({}, headTable)),
            React.DOM.tbody({ className: '' },
                this.props.cars.map((item) => React.createElement(Product, { item: item, key: item.code, id: this.state.id, cars: this.props.cars, cbCheckedItem: this.checkedItem, cbDeleteItem: this.deleteItem, }))),

        )
    },
});