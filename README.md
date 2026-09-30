# DeBrito Chocolate Factory website

Website for DeBrito Chocolate Factory in Hollister, CA. Built and maintained by [NateFixesTech](https://natefixestech.com).

It's a plain static site (`index.html`, `styles.css`, `site.js`) hosted on GitHub Pages.

## Common edits

- **Prices, products, hours:** edit the text in `index.html`.
- **Online store link:** paste the Square Online (or other) store URL into `ORDER_URL` at the top of `site.js`. Until it's set, the order buttons call the shop.
- **Photos:** add images to the `images/` folder.

## Custom domain

When the online store is ready, add a `CNAME` file containing `debritochocolate.com` and point the domain's DNS at GitHub Pages.
