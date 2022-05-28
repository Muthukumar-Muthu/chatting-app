import "./style.css";
import Chat from "../chat/Chat";
const ChatList = () => {
  const array = [
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 12345678910222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 1111111111111111111111111111111111111111",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
    {
      chatImg:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ChatName: "Important",
      RecentMsg: " 123456789101121222222222222222222222222222",
    },
  ];
  const testMap = array.map((chatObj, index) => (
    <Chat
      key={index}
      chatImg={chatObj.chatImg}
      ChatName={chatObj.ChatName}
      RecentMsg={chatObj.RecentMsg}
    />
  ));

  return <div className="chat-list">{testMap}</div>;
};
export default ChatList;
