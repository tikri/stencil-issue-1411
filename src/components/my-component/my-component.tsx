import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  @Prop({ mutable: true, reflectToAttr: true }) value: string;
  @Prop({ mutable: true, reflectToAttr: true }) val: string;

  handleValueChange(e) {
    this.value = e.target.value;
    console.log('property value', this.value);
  }

  handleValChange(e) {
    this.val = e.target.value;
    console.log('property val', this.val);
  }

  render() {
    return [
      <input value={this.value} onInput={ e => this.handleValueChange(e) }></input>,
      <input value={this.val} onInput={ e => this.handleValChange(e) }></input>
    ];
  }
}
