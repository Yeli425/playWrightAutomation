const{test, expect} = require('@playwright/test')

var userid
test('Get users', async({request})=>{

  const response = await request.get('https://reqres.in/api/users?page=2')
    console.log(await response.json())
    expect(response.status()).toBe(200)
    
})

test('Create users', async({request})=>{

    const response = await request.post('https://reqres.in/api/users',
        {
            data:{
                "name":"lebron",
                "job":"basketball player"
            },
            headers:{
                "Accept":"application/json"
            }
        })

        console.log(await response.json())
        expect(response.status()).toBe(201)

        var res = await response.json()
        userid = res.id
        
})


test('Update users', async({request})=>{
    const response = await request.put('https://reqres.in/api/users/'+userid,
    {
        data:{
            "name":"kobe",
            "job":"basketball player"
        },
        headers:{
            "Accept":"application/json"
        }
    })

    console.log(await response.json())
    expect(response.status()).toBe(200)
    var res = await response.json()
    userid = res.id
})


test('Delete users', async({request})=>{

const response = await request.delete('https://reqres.in/api/users/'+userid)
expect(response.status()).toBe(204)

})