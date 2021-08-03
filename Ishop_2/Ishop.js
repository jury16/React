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

    chekedItem: function(i) {
        this.setState(({ chekedItem: !this.state.chekedItem }));
        this.setState(({ id: i }));
    },

    deleteItem: function(i) {
        this.setState(({ idDel: i }));
    },

    render: function() {
        var aRR = this.props.cars;
        aRR.forEach((element, index) => {
            if (element.code == this.state.idDel) {
                aRR.splice(index, 1);
            }
        });
        var carsArr = aRR.map((item) => {
            (this.state.id == item.code) ? claSS = 'IshopFrame _active': claSS = 'IshopFrame';
            return React.DOM.tr({ key: item.code, className: claSS, onClick: this.chekedItem.bind(this, item.code, ), },
                React.DOM.td({ className: 'IshopText' }, item.brand),
                React.DOM.td({ className: 'IshopText _number' }, item.code),
                React.DOM.td({ className: 'IshopText' }, React.DOM.img({ className: 'IshopImg', src: item.url, alt: `${item.brand}` })),
                React.DOM.td({ className: 'IshopText _number' }, item.count),
                React.DOM.td({ className: 'IshopText', }, React.DOM.input({ type: "button", value: "delete", onClick: this.deleteItem.bind(this, item.code), })),
            )


        });

        const headTable = ["brand", "code", "picture", "quantity", "control"].map((item) => {
            return React.DOM.td({ key: item, className: 'IshopTableHead' }, item);
        });

        return React.DOM.table({ className: 'IshopFrame' },
            React.DOM.caption({ className: 'IshopName' }, this.props.shopName),
            React.DOM.thead({ className: 'IshopTableHead' },
                React.DOM.tr({}, headTable)),
            React.DOM.tbody({ className: '' }, carsArr))
    },
});