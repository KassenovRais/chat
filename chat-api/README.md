## About

<h2>Данный сервер работает на 8000 порту </h2>


## Available Scripts

### `npm run dev`



<h1>GET запросы на API</h1>

<h2> С сервера приходит массив с объектами  "http://localhost:8000/messages" </h2>

<p>
    [{<br>
        id:string<br>
        message: string<br>
        author:string<br>
        datetime:string<br>
    }]
</p>

<h2>С сервера приходит массив с объектами "http://localhost:8000/messages?datetime=datetime"  </h2>

<h3>Query параметром является дата вашего сообщения <br>
Пример 2023-04-15T17:09:08.269 в данном формате передается значение 
</h3>

<p>
    [{<br>
        id:string<br>
        message: string<br>
        author:string<br>
        datetime:string<br>
    }]
</p>

<h1>POST запросы на API</h1>

<h2>При данном запросе "http://localhost:8000/messages"</h2>
<h2>В тело запроса треуется поместить объект <h2>

<p>
    [{<br>
        message: string<br>
        author:string<br>
    }]
</p>

<h2>Данный запрос ничего не возвразает</h2>
