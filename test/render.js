import render from '../app/lib/render';
import Component from './components/HelloWorld.jsx';

const props = {
  text: 'Hello World',
};
const isStatic = true;

describe('render', () => {
  it('should return static <div>Hello World</div>', () => {
    const data = {
      Component,
      props,
      isStatic,
    };

    const html = render(data);

    expect(html).to.be.equal('<div>Hello World</div>');
  });

  it('should return a div with Hello World', () => {
    const data = {
      Component,
      props,
      isStatic: false,
    };

    const html = render(data);

    expect(html.indexOf('div')).to.be.equal(1);
    expect(html.indexOf('Hello World')).to.be.greaterThan(-1);
  });
});
