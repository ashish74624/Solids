import Razorpay from 'razorpay'

var instance = new Razorpay({
    key_id: 'rzp_test_louOdXuGoUQdAk',
    key_secret: 'bBBq1OHiQCydW9xrTlatuxgl',
});

var options = {
   amount: 50000,  // amount in the smallest currency unit
   currency: "INR",
   receipt: "order_rcptid_11"
};

instance.orders.create(options, function(err, order) {
    console.log(order);
});  