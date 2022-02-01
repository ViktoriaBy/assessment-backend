const dogs = require('./db.json')
let globalId = 0


module.exports = {
    getDogs: (req, res) => res.status(200).send(dogs),
    deleteDog: (req, res) => {
        let index = dogs.findIndex(elem => elem.id === +req.params.id)
        dogs.splice(index, 1)
        res.status(200).send(dogs)
    },
    createDog: (req, res) => {
        let { title, rating, imgURL } = req.body
        let newDog = {
            id: globalId,
            title, 
            rating,
            imgURL
        }
        dogs.push(newDog)
        res.status(200).send(dogs)
        globalId++
    },
    updateDog: (req, res) => {
        let { id } = req.params
        let { type } = req.body
        let index = dogs.findIndex(elem => +elem.id === +id)

        if (dogs[index].rating === 0 && type === 'minus') {
            res.status(400).send('cannot go below 0')
        } else if (type === 'plus') {
            dogs[index].rating++
            res.status(200).send(dogs)
        } else if (type === 'minus') {
            dogs[index].rating--
            res.status(200).send(dogs)
        } else {
            res.sendStatus(400)
        }
    }
}