

var app = new Vue (
    {
        el:"#root",
        data: {
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        },
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },     
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ],
            indexChat: 0,
            text: "",
        },
        methods:{
            getImage: function(element) {
                scr = "img/avatar"+ element + ".jpg";
                return scr
            },
            getLastChat : function(element) {
                const textLast = this.contacts[element].messages.length-1;
                const text = this.contacts[element].messages[textLast].text ;
                return text;
            },
            getLastChatData : function(element) {
                const dateLast = this.contacts[element].messages.length-1;
                const date = this.contacts[element].messages[dateLast].date ;
                return date;
            },
            getLastData : function(element) {
                const textLastData = this.contacts[element].messages.length-1;
                const textData = this.contacts[element].messages[textLastData].date ;
                return textData;
            },
            chatUser: function(index) {
                if(this.indexChat != index){
                    this.indexChat = index;
                }
                console.log(indexChat);
            },
            nameDisplayedChat : function(index) {
                return this.contacts[index].name
            },
            getImageChat: function(element) {
                image = this.contacts[element].avatar
                scr = "img/avatar"+ image + ".jpg";
                return scr
            },
            getText: function(element) {
                 Xmas95 = new Date();
                 day = Xmas95.getDate();
                 month = Xmas95.getMonth();
                 year =  Xmas95.getYear();
                 hours =  Xmas95.getHours();
                 minutes =  Xmas95.getMinutes(element);
                data = `${day} / ${month} / ${year} ${hours} : ${minutes}`;
                message = {
                            date: data,
                            text: this.text,
                            status: 'sent'
                         } 
                this.contacts[element].messages.push( message )
                
            }


        }
    }
)
console.log();
