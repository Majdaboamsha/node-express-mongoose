const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    {id: 1, name: 'Course1'},
    {id: 2, name: 'Course2'},
    {id: 3, name: 'Course3'},
    {id: 4, name: 'Course4'}
]

app.get('/', (req, res) => {

    res.send('Welcome to my application');

});

app.get('/api/courses', (req, res) => {

    res.send([1,2,3]);

})

app.get('/api/courses/:id', (req, res) => {

    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404);
    else return res.send(course);
    
})

app.post('/api/courses/', (req, res)=> {
    const course = {
        id: courses.length + 1,
        name : req.body.name
    }
    courses.push(course);
    res.send(course);

const port = process.env.PORT || 3000;
console.log(port);
app.listen(port), () => console.log(`listening on ${port}`)})