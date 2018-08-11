import discord
import asyncio
import random

client = discord.Client()


@client.event
async def on_ready():
    print('BOT ONLINE - OLÁ MUNDO')
    print(client.user.name)
    print(client.user.id)
    print('-----PR------')


@client.event
async def on_message(message):
    if message.content.lower().startswith('/test'):
        await client.send_message(message.channel, "Olá Mundo, estou vivo!!")

    if message.content.lower().startswith('/loja'):
        await client.send_message(message.channel, "https://blastcraft.com.br/")

    if message.content.lower().startswith('/twitter'):
        await client.send_message(message.channel, "Twitter - https://twitter.com/AlexeyOficial")

    if message.content.lower().startswith('/canal'):
        await client.send_message(message.channel, "Aque está o canal do aleexey: https://www.youtube.com/channel/UCvCRTD0r6niKowGIUACV8NQ")

    if message.content.lower().startswith ('/ajuda'):
        await client.send_message(message.channel, "Os helps podem te ajudar, se não tiver  nenhum, fale com o configurador, ou o nitroo.")

    if message.content.lower().startswith('/moeda'):
        if message.author.id == "218030525003071489":  # adicione o seu ID!
            escolha = random.randint(1, 2)
            if escolha == 1:
                await client.add_reaction(message, '😀')
            if escolha == 2:
                await client.add_reaction(message, '👑')
        else:
            await client.send_message(message.channel, " Você não tem permissão para usar esse comando")


client.run('NDc3NjMxODgzOTc5NTIyMDUw.DlBlrw.gknHZanVZWFup4_GHY2toEhxKJ0')
