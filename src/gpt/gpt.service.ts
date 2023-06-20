import { Injectable } from '@nestjs/common';
import { CreateGptDto } from './dto/create-gpt.dto';
import { UpdateGptDto } from './dto/update-gpt.dto';

@Injectable()
export class GptService {
  async create(createGptDto: CreateGptDto) {

    return 'This action adds a new gpt';
  }

  async findAll() {

    const respuesta = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " ,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              `
                            El usuario quiere cocinar algo con arroz, papas, tomates (no necesariamente se usan todos estos ingredientes) y 
                            quiere cocinar una comida muy tipica de peru, que no sea ningun tipo de tortilla a menos que el pais sea de mexico, puedes agregar algunos ingredientes,  ¿qué le recomiendas?, debes responder en español.
                            Y en formato de JSON como por ejemplo:
                            {
                                "ingredientes": "...",
                                "pais": "Colombia",
                                "respuesta": "Arroz con pollo",
                                "receta": "...",
                                "informacion_nutricional": "..."
                            }  
                            SOLO BRINDAR UNA RESPUESTA EN FORMATO JSON, SIN COMENTARIOS NI NADA. 
                        `
          },
          {
            role: "user",
            content: "..."
          }
        ]
      })
    })
    const data = await respuesta.json();
    return data.choices;
  }

  findOne(id: number) {
    return `This action returns a #${id} gpt`;
  }

  update(id: number, updateGptDto: UpdateGptDto) {
    return `This action updates a #${id} gpt`;
  }

  remove(id: number) {
    return `This action removes a #${id} gpt`;
  }
}
