namespace RankingApp.Models
{
    public class ItemModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int ImageId { get; set; }
        public int Ranking { get; set; }
        public int ItemType { get; set; } // what kind of item is it, i.e., a movie, an album, etc.
    }
}
