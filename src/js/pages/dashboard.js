const Dashboard = {
  async init() {
    await this._fetchData();
  },

  async _fetchData() {
    try {
      const response = await fetch('./data/data.json');
      if (!response.ok){
        throw new Error (`Failed to fetch data, status :  ${response.status}`);
      }
      const data = await response.json();
      this._StoryItem = data.listStory;
      console.log(this._StoryItem);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
};
 
export default Dashboard;