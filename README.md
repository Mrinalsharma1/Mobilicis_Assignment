# Mobilicis_Assignment
This assignment is for internship

First step is to create a project and install all the npm modules which is required

create a database and import given file into mongodb

app.post('/getdetails', async (req, res) => {
    try {

        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db('Mobilic');
        const collection = db.collection('sampleData');
        const findResult = await collection.find({}).toArray();
        console.log('Found documents =>', findResult);
        res.send(findResult)
    } catch (e) {
        console.log('error', e)
        res.status(500).send({ status: false, error: e })
    }
})

this code is use to fetch the data from database


then create a component in react and hit the API to fetch the data

useEffect(() => {
        axios.post('http://localhost:5000/getdetails').then((response) => {
            setData(response.data);
            setResult(response.data)
        });
    }, []);
after that storing the data into state setData is the main state and setresult is the temporary state which is used to stored filterd data

below i am attaching the interface of the assignment.




![Screenshot (58)](https://user-images.githubusercontent.com/59733255/234310349-077d0615-18ef-471f-9899-079ab9a88949.png)



