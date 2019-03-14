namespace SignalRDemo.App.Hubs
{
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.SignalR;

    public interface IChatClient
    {
        Task MessageReceived(string message);
    }

    public class ChatHub : Hub<IChatClient>
    {
        public Task SendMessage(string message)
        {
            return this.Clients.Others.MessageReceived(message);
        }
    }
}