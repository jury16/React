var Product = React.createClass({
    displayName: 'Product',
    propTypes: {
        item: React.PropTypes.object,
        cbCheckedItem: React.PropTypes.func,
        cbDeleteItem: React.PropTypes.func,
        selecteId: React.PropTypes.number,
    },

    selectedItem: function(sectedCode) {
        this.props.cbCheckedItem(sectedCode);
    },

    deleteItem: function(code) {
        if (confirm('Delete Item?') ? true : false) {
            this.props.cbDeleteItem(code);
        }
    },

    render: function() {
        (this.props.selecteId == this.props.item.code) ? claSS = 'ProductActive': claSS = null;
        return React.DOM.tr({ key: this.props.item.code, className: claSS, onClick: this.selectedItem.bind(this, this.props.item.code, ), },
            React.DOM.td({ className: 'ProductText' }, this.props.item.brand),
            React.DOM.td({ className: 'ProductText _number' }, this.props.item.code),
            React.DOM.td({ className: 'ProductText' }, React.DOM.img({ className: 'IshopImg', src: this.props.item.url, alt: `${this.props.item.brand}` })),
            React.DOM.td({ className: 'ProductText _number' }, this.props.item.count),
            React.DOM.td({ className: 'ProductText', }, React.DOM.input({ type: "button", value: "delete", onClick: this.deleteItem.bind(this, this.props.item.code), })),
        );

    },
});