export const users = [
    {
        username: 'Pedro',
        uid: 1,
        email: 'pedro@gmail.com',
        password: '123456',
        avatarURL: '../../assets/pedro_avatar.jpg',
        msgs: [
            {
                senderId: 1,
                receiverId: 3,
                messageId:10,
                text: 'Texto de prueba',
                timestamp: new Date(1698000000000).getTime()
            },
            {
                senderId: 1,
                receiverId: 3,
                messageId:11,
                text: 'Texto de prueba',
                timestamp: new Date(1698001000000).getTime()
            },
            {
                senderId: 3,
                receiverId: 1,
                messageId:12,
                text: 'Texto de prueba',
                timestamp: new Date(1698002000000).getTime()
            },
            {
                senderId: 1,
                receiverId: 3,
                messageId:13,
                text: 'Texto de prueba',
                timestamp: new Date(1698003000000).getTime()
            },
            {
                senderId: 1,
                receiverId: 3,
                messageId:14,
                text: 'Texto de prueba',
                timestamp: new Date(1698003000000).getTime()
            },
            {
                senderId: 1,
                receiverId: 3,
                messageId:15,
                text: 'Texto de prueba',
                timestamp: new Date(1698059000000).getTime()
            },
            {
                senderId: 1,
                receiverId: 2,
                messageId:16,
                text: 'Texto de prueba',
                timestamp: new Date(1698000000000).getTime()
            },
            {
                senderId: 1,
                receiverId: 2,
                messageId:17,
                text: 'Texto de prueba',
                timestamp: new Date(1698001000000).getTime()
            },
            {
                senderId: 2,
                receiverId: 1,
                messageId:18,
                text: 'Texto de prueba',
                timestamp: new Date(1698002000000).getTime()
            },
            {
                senderId: 1,
                receiverId: 2,
                messageId:19,
                text: 'Texto de prueba',
                timestamp: new Date(1698003000000).getTime()
            },
            {
                senderId: 1,
                receiverId: 2,
                messageId:20,
                text: 'Texto de prueba',
                timestamp: new Date(1698003000000).getTime()
            },
            {
                senderId: 1,
                receiverId: 2,
                messageId:21,
                text: 'Texto de prueba',
                timestamp: new Date(1698004000000).getTime()
            }
        ]
    },
    {
        username: 'Jose',
        uid: 2,
        email: 'jose@gmail.com',
        password: '123456',
        avatarURL: '../../assets/jose_avatar.jpg',
        msgs: [
            {
                senderId: 1,
                receiverId: 2,
                messageId:16,
                text: 'Texto de prueba',
                timestamp: new Date(1698000000000).getTime()
            },
            {
                senderId: 1,
                receiverId: 2,
                messageId:17,
                text: 'Texto de prueba',
                timestamp: new Date(1698001000000).getTime()
            },
            {
                senderId: 2,
                receiverId: 1,
                messageId:18,
                text: 'Texto de prueba',
                timestamp: new Date(1698002000000).getTime()
            },
            {
                senderId: 1,
                receiverId: 2,
                messageId:19,
                text: 'Texto de prueba',
                timestamp: new Date(1698003000000).getTime()
            },
            {
                senderId: 1,
                receiverId: 2,
                messageId:20,
                text: 'Texto de prueba',
                timestamp: new Date(1698003000000).getTime()
            },
            {
                senderId: 1,
                receiverId: 2,
                messageId:21,
                text: 'Texto de prueba',
                timestamp: new Date(1698004000000).getTime()
            }
        ]
    },
    {
        username: 'Maria',
        uid: 3,
        email: 'maria@gmail.com',
        password: '123456',
        avatarURL: '../../assets/maria_avatar.jpg',
        msgs: [
            {
                senderId: 1,
                receiverId: 3,
                messageId:10,
                text: 'Texto de prueba',
                timestamp: new Date(1698000000000).getTime()
            },
            {
                senderId: 1,
                receiverId: 3,
                messageId:11,
                text: 'Texto de prueba',
                timestamp: new Date(1698001000000).getTime()
            },
            {
                senderId: 3,
                receiverId: 1,
                messageId:12,
                text: 'Texto de prueba',
                timestamp: new Date(1698002000000).getTime()
            },
            {
                senderId: 1,
                receiverId: 3,
                messageId:13,
                text: 'Texto de prueba',
                timestamp: new Date(1698003000000).getTime()
            },
            {
                senderId: 1,
                receiverId: 3,
                messageId:14,
                text: 'Texto de prueba',
                timestamp: new Date(1698003000000).getTime()
            },
            {
                senderId: 1,
                receiverId: 3,
                messageId:15,
                text: 'Texto de prueba',
                timestamp: new Date(1698059000000).getTime()
            }
        ]
    }
];

export const channels = [
    {
        channelName: 'general',
        channelId: 1,
        channelTexts: [
            {
                text: 'Hey, guys this is going to be the main channel',
                messageId: 1,
                timestamp: new Date(1698003000000).getTime(),
                senderId: 1
                
            },
            {
                text: 'Fantastic',
                messageId: 2,
                timestamp: new Date(1698004000000).getTime(),
                senderId: 3
                
            },
            {
                text: 'Looking forward to work with you',
                messageId: 3,
                timestamp: new Date(1698005000000).getTime(),
                senderId: 2
                
            },
            {
                text: 'Yeah, me too',
                messageId: 4,
                timestamp: new Date(1698006000000).getTime(),
                senderId: 1
                
            },
        ]
    },
    {
        channelName: 'project ahead',
        channelId: 2,
        channelTexts: [
            {
                text: 'Guys, i created this one to talk about the future projects',
                messageId: 5,
                timestamp: new Date(1698004000000).getTime(),
                senderId: 3
                
            },
            {
                text: 'Awesome',
                messageId: 6,
                timestamp: new Date(1698005000000).getTime(),
                senderId: 1
                
            },
            {
                text: 'Great',
                messageId: 7,
                timestamp: new Date(1698006000000).getTime(),
                senderId: 2
                
            }
        ]
    }
]