export async function jsonBodyHandler(request, response) {
  //Adiciona ccada buffer
const buffers = []

//Coleta os chunk de dados do request e armazena no array buffers
 for await (const chunk of request){
      buffers.push(chunk)
    }

  try {
    //Concatena os chunks e converte para strings, em seguida converte a string para JSON
    request.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch (error) {
    request.body = null
  }


  //Define o header de resposta como JSON
response.setHeader("Content-Type", "application/json")



}