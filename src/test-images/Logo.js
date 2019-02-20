import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const width = '116'
const height = '56'
const viewBox = '0 0 116 56'

const sizes = {
  small: { width: 18, height: 18 },
  medium: { width: 24, height: 24 },
  large: { width: 36, height: 36 }
}

// somehow sizes is ending up in markup, until we have a better solution
// just render it empty, instead to '[Object object]'
Object.defineProperty(sizes, 'toString', { value: () => void 0, enumerable: false })

const getDimensions = (size, sizes) => {
  if (size && typeof size.width === 'number' && typeof size.height === 'number') {
    return size
  }
  return size && sizes[size]
    ? sizes[size]
    : { width, height }
}

const getCss = (size, sizes, fillColor, fillColorRule, noStyles) => {
  if (noStyles) { return '' }
  const dimensions = getDimensions(size, sizes)
  const fillRule = fillColor && fillColorRule ? `${fillColorRule}{ fill: ${fillColor}; }` : ''
  return css`
    width: ${dimensions.width}px;
    height: ${dimensions.height}px;
    ${fillRule}
  `
}

const propsToCss = ({
  size,
  sizes,
  fillColor,
  fillColorRule,
  noStyles
}) => getCss(size, sizes, fillColor, fillColorRule, noStyles)

const Image = styled.svg`${propsToCss}`

const children = (
  <Fragment>
    <path
      fill='#003468'
      d='M0 0v27h116V0H0z'
      key='key-0'
    />
    <path
      fill='#FF7500'
      d='M0 56h102.33c7.605 0 13.67-6.225 13.67-13.521V29H0v27z'
      key='key-1'
    />
    <path
      fill='#003468'
      d='M11.319 50.062h-.193c-2.303 0-4.288-1.601-4.288-4.268 0-1.644 2.475-1.644 2.475 0 0 1.152.747 1.815 1.813 1.815h.193c1.066 0 1.878-.556 1.878-1.624 0-2.667-6.209-2.922-6.209-6.827v-.446c0-2.283 2.283-3.65 4.139-3.65h.193c2.197 0 4.161 1.367 4.161 3.414 0 1.578-2.455 1.622-2.455.063 0-.554-.682-1.023-1.707-1.023h-.193c-.938 0-1.665.512-1.665 1.324v.318c0 1.686 6.21 2.434 6.21 6.827 0 2.437-1.898 4.077-4.352 4.077zM22.05 50.062h-.191c-2.347 0-4.267-1.813-4.267-4.182v-6.658c0-2.367 1.92-4.16 4.267-4.16h.191c2.155 0 3.948 1.473 4.226 3.564.021.064.021.126.021.214 0 .768-.641 1.195-1.259 1.195-.554 0-1.088-.344-1.194-1.068-.128-.876-.875-1.451-1.793-1.451h-.191c-1.003 0-1.813.727-1.813 1.706v6.658c0 1.003.831 1.729 1.813 1.729h.191c.918 0 1.665-.579 1.793-1.453.106-.725.661-1.066 1.194-1.066.641 0 1.259.428 1.259 1.195v.233c-.32 2.051-2.092 3.544-4.247 3.544zM32.527 50.062h-.192c-2.347 0-4.267-1.835-4.267-4.182v-6.637c0-2.368 1.92-4.182 4.267-4.182h.192c2.368 0 4.267 1.813 4.267 4.182v6.616c-.001 2.369-1.899 4.203-4.267 4.203zm1.792-10.818c0-1.001-.789-1.728-1.792-1.728h-.192c-1.003 0-1.792.746-1.792 1.728v6.616c0 1.002.811 1.75 1.792 1.75h.192c1.003 0 1.792-.748 1.792-1.729v-6.637zM43.792 50.062H43.6a4.279 4.279 0 0 1-4.267-4.268V36.3c0-.832.619-1.238 1.238-1.238s1.237.406 1.237 1.238v9.494c0 .981.812 1.815 1.792 1.815h.192a1.813 1.813 0 0 0 1.814-1.815V36.3c0-.832.618-1.238 1.238-1.238.619 0 1.237.406 1.237 1.238v9.494c0 2.35-1.919 4.268-4.289 4.268zM56.829 37.645h-1.706v11.182c0 .832-.62 1.236-1.239 1.236-.618 0-1.236-.404-1.236-1.236V37.645H50.94c-.81 0-1.237-.619-1.237-1.236 0-.598.427-1.217 1.237-1.217h5.889c.832 0 1.238.619 1.238 1.217-.001.616-.406 1.236-1.238 1.236zM68.352 49.934h-5.549c-.789 0-1.259-.745-1.259-1.472 0-.276.043-.533.192-.768l4.844-7.809c.255-.427.255-.663.255-.981v-.17c0-.643-.554-1.218-1.277-1.218h-.065c-.705 0-1.236.554-1.236 1.218v.233c0 .811-.621 1.216-1.24 1.216-.617 0-1.237-.405-1.237-1.216v-.32c0-2.07 1.685-3.585 3.714-3.585h.065c2.004 0 3.753 1.495 3.753 3.585l-.021.234c0 .811-.298 1.472-.748 2.22l-3.903 6.381h3.714c.831 0 1.235.617 1.235 1.215-.002.617-.406 1.237-1.237 1.237zM78.101 47.013h-.47v1.813c0 .832-.618 1.236-1.236 1.236-.62 0-1.237-.404-1.237-1.236v-1.813h-3.352c-.854 0-1.387-.47-1.387-1.304 0-.211.043-.489.128-.681l3.99-9.218c.234-.535.662-.748 1.088-.748.64 0 1.28.491 1.28 1.194 0 .173-.021.342-.105.535l-3.522 7.767h1.88v-1.239c0-.811.617-1.236 1.237-1.236.618 0 1.236.404 1.236 1.236v1.239h.47c.832 0 1.236.598 1.236 1.215 0 .62-.404 1.24-1.236 1.24z'
      key='key-2'
    />
    <path
      fill='#FFF'
      d='M8.248 21.014c-.619 0-1.237-.404-1.237-1.238V7.252c0-.833.618-1.238 1.237-1.238.619 0 1.237.406 1.237 1.238v12.523c0 .834-.618 1.239-1.237 1.239zM22.726 21.014c-.619 0-1.237-.404-1.237-1.238v-7.808l-1.814 4.181c-.299.705-.853.833-1.259.833-.405 0-.959-.128-1.258-.833l-1.813-4.181v7.808c0 .834-.619 1.238-1.238 1.238-.618 0-1.237-.404-1.237-1.238V7.252c0-.662.575-1.238 1.237-1.238h.32c.79 0 1.089.512 1.345 1.067l2.645 5.975 2.646-5.975c.234-.555.555-1.067 1.344-1.067h.32c.662 0 1.238.576 1.238 1.238v12.523c-.001.834-.621 1.239-1.239 1.239zM37.177 21.014c-.619 0-1.238-.404-1.238-1.238v-7.808l-1.813 4.181c-.299.705-.854.833-1.259.833-.405 0-.96-.128-1.259-.833l-1.814-4.181v7.808c0 .834-.618 1.238-1.237 1.238-.618 0-1.237-.404-1.237-1.238V7.252c0-.662.576-1.238 1.237-1.238h.32c.79 0 1.089.512 1.345 1.067l2.646 5.975 2.646-5.975c.234-.555.554-1.067 1.344-1.067h.32c.662 0 1.238.576 1.238 1.238v12.523c-.001.834-.62 1.239-1.239 1.239zM45.936 21.014h-.191c-2.348 0-4.268-1.835-4.268-4.183v-6.635c0-2.369 1.92-4.182 4.268-4.182h.191c2.369 0 4.267 1.813 4.267 4.182v6.614c0 2.369-1.898 4.204-4.267 4.204zm1.793-10.818c0-1.003-.789-1.729-1.792-1.729h-.191c-1.004 0-1.793.747-1.793 1.729v6.614c0 1.004.811 1.75 1.793 1.75h.191c1.003 0 1.792-.747 1.792-1.729v-6.635zM0 27h116v2H0z'
      key='key-3'
    />
  </Fragment>
)

const defaultProps = {
  children,
  viewBox,
  fillColor: null,
  fillColorRule: '&&& path, &&& use, &&& g',
  sizes,
  size: null
}

const propTypes = {
  fillColor: PropTypes.string,
  fillColorRule: PropTypes.string,
  viewBox: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      height: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired
    })
  ]),
  sizes: (props, name, componentName) => {
    const prop = props[name]
    if (typeof prop !== 'object') { return }
    for (let key in prop) {
      if (!prop[key] || typeof prop[key].width !== 'number' || typeof prop[key].height !== 'number') {
        return new Error(
          'Invalid prop `' + name + '` supplied to `' + componentName + '`. Validation failed.'
        )
      }
    }
  }
}

export default Object.assign(Image, {
  getDimensions,
  getCss,
  defaultProps,
  propTypes,
  displayName: 'Logo'
})
