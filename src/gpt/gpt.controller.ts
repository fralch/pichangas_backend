import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GptService } from './gpt.service';
import { CreateGptDto } from './dto/create-gpt.dto';
import { UpdateGptDto } from './dto/update-gpt.dto';

@Controller('gpt')
export class GptController {
  constructor(private readonly gptService: GptService) {}

  @Post()
  create(@Body() createGptDto: CreateGptDto) {
    return this.gptService.create(createGptDto);
  }

  @Get()
  async findAll(@Body() data_JSON: any) {
    const {pais} = data_JSON;
    const {ingredientes} = data_JSON;
    let ingredientes_todos = "";
    for (let i = 0; i < ingredientes.length; i++) {
        if (i === ingredientes.length - 1) {
          ingredientes_todos += ingredientes[i];
        } else {
          ingredientes_todos += ingredientes[i] + ", ";
        }
    }
    const respuesta = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + process.env.API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              `
                            El usuario quiere cocinar algo con ${ingredientes_todos}  (no necesariamente se usan todos estos ingredientes) y 
                            quiere cocinar una comida muy tipica de ${pais}, que no sea ningun tipo de tortilla a menos que el pais sea de mexico, puedes agregar algunos ingredientes,  ¿qué le recomiendas?, debes responder en español.
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gptService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGptDto: UpdateGptDto) {
    return this.gptService.update(+id, updateGptDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gptService.remove(+id);
  }
}
