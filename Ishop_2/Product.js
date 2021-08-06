var Product = React.createClass({
    displayName: 'Product',
    propTypes: {
        aRR: React.PropTypes.array,
        item: React.PropTypes.object,
        cbCheckedItem: React.PropTypes.func,
        cbDeleteItem: React.PropTypes.func,
        id: React.PropTypes.number,
    },

    selectedItem: function(i) {
        this.props.cbCheckedItem(i);
    },

    deleteItem: function(i) {
        var confirmDelete = confirm('Delete Item?') ? "yes" : "no";
        if (confirmDelete == "yes") {
            this.props.cbDeleteItem(i);
        }

    },

    render: function() {
        (this.props.id == this.props.item.code) ? claSS = 'ProductActive': claSS = null;
        return React.DOM.tr({ key: this.props.item.code, className: claSS, onClick: this.selectedItem.bind(this, this.props.item.code, ), },
            React.DOM.td({ className: 'ProductText' }, this.props.item.brand),
            React.DOM.td({ className: 'ProductText _number' }, this.props.item.code),
            React.DOM.td({ className: 'ProductText' }, React.DOM.img({ className: 'IshopImg', src: this.props.item.url, alt: `${this.props.item.brand}` })),
            React.DOM.td({ className: 'ProductText _number' }, this.props.item.count),
            React.DOM.td({ className: 'ProductText', }, React.DOM.input({ type: "button", value: "delete", onClick: this.deleteItem.bind(this, this.props.item.code), })),
        );

    },
});