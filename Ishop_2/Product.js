var Product = React.createClass({
    displayName: 'Product',
    propTypes: {
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
        this.props.cars.forEach((element, index, arr) => {
            if (element.code == this.state.idDel) {
                arr.splice(index, 1);
            }
        });
        var carsArr = this.props.cars.map((item) => {
            (this.state.id == item.code) ? claSS = 'ProductActive': claSS = null;
            return React.DOM.tr({ key: item.code, className: claSS, onClick: this.chekedItem.bind(this, item.code, ), },
                React.DOM.td({ className: 'ProductText' }, item.brand),
                React.DOM.td({ className: 'ProductText _number' }, item.code),
                React.DOM.td({ className: 'ProductText' }, React.DOM.img({ className: 'IshopImg', src: item.url, alt: `${item.brand}` })),
                React.DOM.td({ className: 'ProductText _number' }, item.count),
                React.DOM.td({ className: 'ProductText', }, React.DOM.input({ type: "button", value: "delete", onClick: this.deleteItem.bind(this, item.code), })),
            )
        });
        return React.DOM.tbody({ className: '' }, carsArr)
    },
});