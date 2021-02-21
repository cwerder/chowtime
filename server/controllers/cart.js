module.exports = {
    addToCart: req => {
        if (!req.session.cart) {
            req.session.cart = [];
        }
        var itemIndex = req.session.cart.findIndex(item => item.name === req.body.name);
        if (itemIndex === -1) {
            req.session.cart.push(req.body);
        } else {
            req.session.cart[itemIndex].quantity += req.body.quantity;
        }
    }
}