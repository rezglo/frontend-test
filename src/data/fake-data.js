export const users = [
    {
        username: 'Pedro',
        uid: 1,
        email: 'pedro@gmail.com',
        password: '123456',
        avatar_url: '../assets/pedro_avatar.jpg',
        msgs: [
            {
                senderId: 1,
                receiverId: 3,
                messageId:10,
                message: 'Texto de prueba',
                timestamp: new Date(1698000000000).getTime()
            },
            {
                senderId: 1,
                receiverId: 3,
                messageId:11,
                message: 'Texto de prueba',
                timestamp: new Date(1698001000000).getTime()
            },
            {
                senderId: 3,
                receiverId: 1,
                messageId:12,
                message: 'Texto de prueba',
                timestamp: new Date(1698002000000).getTime()
            },
            {
                senderId: 1,
                receiverId: 3,
                messageId:13,
                message: 'Texto de prueba',
                timestamp: new Date(1698003000000).getTime()
            },
            {
                senderId: 1,
                receiverId: 3,
                messageId:14,
                message: 'Texto de prueba',
                timestamp: new Date(1698003000000).getTime()
            },
            {
                senderId: 1,
                receiverId: 3,
                messageId:15,
                message: 'Texto de prueba',
                timestamp: new Date(1698059000000).getTime()
            },
            {
                senderId: 1,
                receiverId: 2,
                messageId:16,
                message: 'Texto de prueba',
                timestamp: new Date(1698000000000).getTime()
            },
            {
                senderId: 1,
                receiverId: 2,
                messageId:17,
                message: 'Texto de prueba',
                timestamp: new Date(1698001000000).getTime()
            },
            {
                senderId: 2,
                receiverId: 1,
                messageId:18,
                message: 'Texto de prueba',
                timestamp: new Date(1698002000000).getTime()
            },
            {
                senderId: 1,
                receiverId: 2,
                messageId:19,
                message: 'Texto de prueba',
                timestamp: new Date(1698003000000).getTime()
            },
            {
                senderId: 1,
                receiverId: 2,
                messageId:20,
                message: 'Texto de prueba',
                timestamp: new Date(1698003000000).getTime()
            },
            {
                senderId: 1,
                receiverId: 2,
                messageId:21,
                message: 'Texto de prueba',
                timestamp: new Date(1698004000000).getTime()
            }
        ]
    },
    {
        username: 'Jose',
        uid: 2,
        email: 'jose@gmail.com',
        password: '123456',
        avatar_url: '../assets/jose_avatar.jpg',
        msgs: [
            {
                senderId: 1,
                receiverId: 2,
                messageId:16,
                message: 'Texto de prueba',
                timestamp: new Date(1698000000000).getTime()
            },
            {
                senderId: 1,
                receiverId: 2,
                messageId:17,
                message: 'Texto de prueba',
                timestamp: new Date(1698001000000).getTime()
            },
            {
                senderId: 2,
                receiverId: 1,
                messageId:18,
                message: 'Texto de prueba',
                timestamp: new Date(1698002000000).getTime()
            },
            {
                senderId: 1,
                receiverId: 2,
                messageId:19,
                message: 'Texto de prueba',
                timestamp: new Date(1698003000000).getTime()
            },
            {
                senderId: 1,
                receiverId: 2,
                messageId:20,
                message: 'Texto de prueba',
                timestamp: new Date(1698003000000).getTime()
            },
            {
                senderId: 1,
                receiverId: 2,
                messageId:21,
                message: 'Texto de prueba',
                timestamp: new Date(1698004000000).getTime()
            }
        ]
    },
    {
        username: 'Maria',
        uid: 3,
        email: 'maria@gmail.com',
        password: '123456',
        avatar_url: '../assets/maria_avatar.jpg',
        msgs: [
            {
                senderId: 1,
                receiverId: 3,
                messageId:10,
                message: 'Texto de prueba',
                timestamp: new Date(1698000000000).getTime()
            },
            {
                senderId: 1,
                receiverId: 3,
                messageId:11,
                message: 'Texto de prueba',
                timestamp: new Date(1698001000000).getTime()
            },
            {
                senderId: 3,
                receiverId: 1,
                messageId:12,
                message: 'Texto de prueba',
                timestamp: new Date(1698002000000).getTime()
            },
            {
                senderId: 1,
                receiverId: 3,
                messageId:13,
                message: 'Texto de prueba',
                timestamp: new Date(1698003000000).getTime()
            },
            {
                senderId: 1,
                receiverId: 3,
                messageId:14,
                message: 'Texto de prueba',
                timestamp: new Date(1698003000000).getTime()
            },
            {
                senderId: 1,
                receiverId: 3,
                messageId:15,
                message: 'Texto de prueba',
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
                id: 1,
                user: {
                    uid: 1
                }
            },
            {
                text: 'Fantastic',
                id: 2,
                user: {
                    uid: 3
                }
            },
            {
                text: 'Looking forward to work with you',
                id: 3,
                user: {
                    uid: 2
                }
            },
            {
                text: 'Yeah, me too',
                id: 4,
                user: {
                    uid: 1
                }
            },
        ]
    },
    {
        channelName: 'project ahead',
        channelId: 2,
        channelTexts: [
            {
                text: 'Guys, i created this one to talk about the future projects',
                id: 5,
                user: {
                    uid: 3
                }
            },
            {
                text: 'Awesome',
                id: 6,
                user: {
                    uid: 1
                }
            },
            {
                text: 'Great',
                id: 7,
                user: {
                    uid: 2
                }
            }
        ]
    }
]