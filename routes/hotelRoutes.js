const mongoose = require('mongoose');

const Hotel = mongoose.model('Hotel');

module.exports = app => {
    app.get('/api/hotels', async (req, res) => {
        const hotels = await Hotel.find();
        res.send(hotels);
    });

    app.get('/api/hotels/:id', async (req, res) => {
        const hotel = await Hotel.findOne({
            _id: req.params.id
        });
    
        res.json(hotel);
    });

    app.post('/api/hotels', async (req, res) => {
        const { name, stars, price, image, amenities } = req.body;
    
        const hotel = new Hotel({
            name,
            stars,
            price,
            image,
            amenities
        });

        try {
            await hotel.save();
            res.json(hotel);
        } catch (err) {
            res.status(400).send(err);
        }
    });

    app.put('/api/hotels/:id', async (req, res) => {
        const { name, stars, price, image, amenities } = req.body;
        
        Hotel.findByIdAndUpdate(req.params.id, {
            $set: { 
                name,
                stars,
                price,
                image,
                amenities
            }
        }, { new: true }, (err, hotel) => {
            if (err) {
                res.status(500).send(err);
                return;
            }

            res.json(hotel);
        });
    });

    app.delete('/api/hotels/:id', async (req, res) => {
        try {
            let hotel = await Hotel.deleteOne({ _id: req.params.id });
            res.json(hotel);
        } catch(err) {
            res.status(500).send(err);
        }
    });
};
