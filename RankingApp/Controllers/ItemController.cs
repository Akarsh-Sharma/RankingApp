using Microsoft.AspNetCore.Mvc;

namespace RankingApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ItemController : Controller
    {
        // could store the data in a DB and call it here if this were a real world app but 
        // for now we will just use a static collection of items

    }
}
