Design a component that:
<p>gets ONE props containing multiline text, broken up with <br>, <br/> or <br /> tags; displays this multi-line text inside itself, broken up with <br> tags.</p>
Do not use the white-space style property and tags styled with this style property.

Don't use the dangerouslySetInnerHTML React attribute.

Develop a br2jsx project that demonstrates the work of the component.

Execution example:

render () {
   let text = "first <br> second <br/> third <br /> last";
   return <BR2JSX text = {text} />;
}
