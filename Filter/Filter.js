var Filter = React.createClass({

    displayName: 'Filter',

    propTypes: {
        arraY: React.PropTypes.array,
    },
    getInitialState: function() {
        return {

            arraY: arraY,
            inputString: "",
            checkboxChecked: false,

        }

    },


    sortArr: function() {
        var arrModif = this.props.arraY.slice();

        if (this.state.inputString) {
            var arrModif = arrModif.filter(item => item.includes(this.state.inputString));
        }
        if (this.state.checkboxChecked)
            arrModif.sort();
        this.setState({ arraY: arrModif });
    },

    changeCheckbox: function() {
        this.setState(({ checkboxChecked: !this.state.checkboxChecked }), this.sortArr);

    },
    searchString: function(EO) {
        this.setState({ inputString: EO.target.value }, this.sortArr);
        console.log(EO.target.value);
    },
    clean: function() {
        this.setState({ inputString: '', arraY: arraY, checkboxChecked: false, }, this.sortArr);
    },

    render: function() {
        var arr = this.state.arraY.map((item, index) => React.DOM.p({ key: index }, item));

        return React.DOM.div({ className: null },
            React.DOM.div({},
                React.DOM.input({ className: null, type: 'checkbox', onClick: this.changeCheckbox, checked: this.state.checkboxChecked }),
                React.DOM.input({ className: null, type: 'text', onChange: this.searchString, value: this.state.inputString }),
                React.DOM.input({ className: null, type: 'button', value: 'RESET', onClick: this.clean }),
            ),
            React.DOM.div({ className: 'FilterArr' }, arr),
        );

    },
});
