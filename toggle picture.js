document.getElementById('changeButton').addEventListener('click', function() {
    var body = document.body;
    var h1 = document.getElementsByTagName('h1')[0];
    var h2 = document.getElementsByTagName('h2')[0];
    var currentBackground = getComputedStyle(body).backgroundImage;


    if (currentBackground.includes('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cd31a73a-791d-418a-83fd-8a67d6675b5d/dem9giz-dfb2dba5-78a4-4752-9327-d22dc8b7e441.png/v1/fill/w_1192,h_670,q_70,strp/blue_spider_lily_by_fei_t_dem9giz-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcL2NkMzFhNzNhLTc5MWQtNDE4YS04M2ZkLThhNjdkNjY3NWI1ZFwvZGVtOWdpei1kZmIyZGJhNS03OGE0LTQ3NTItOTMyNy1kMjJkYzhiN2U0NDEucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.bTEI0os5s3mllLtJZasZBPVbHlbnecVecQ-XYJHV3TI')) {
      body.style.backgroundImage = 'url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/45d458e7-fcdd-43a9-942c-a25abae06c4e/ddnpccx-853f6f61-7a2a-418d-9e5b-57415ae6aa73.png/v1/fill/w_1192,h_670,q_70,strp/cool_blue_by_bgai_ddnpccx-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzQ1ZDQ1OGU3LWZjZGQtNDNhOS05NDJjLWEyNWFiYWUwNmM0ZVwvZGRucGNjeC04NTNmNmY2MS03YTJhLTQxOGQtOWU1Yi01NzQxNWFlNmFhNzMucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.BWKUDd4zkLt59IN9nJGWccs3-ryCjUC6zxy2XGk9ZLw")';

    
      
      
    } else {
      body.style.backgroundImage = 'url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cd31a73a-791d-418a-83fd-8a67d6675b5d/dem9giz-dfb2dba5-78a4-4752-9327-d22dc8b7e441.png/v1/fill/w_1192,h_670,q_70,strp/blue_spider_lily_by_fei_t_dem9giz-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcL2NkMzFhNzNhLTc5MWQtNDE4YS04M2ZkLThhNjdkNjY3NWI1ZFwvZGVtOWdpei1kZmIyZGJhNS03OGE0LTQ3NTItOTMyNy1kMjJkYzhiN2U0NDEucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.bTEI0os5s3mllLtJZasZBPVbHlbnecVecQ-XYJHV3TI")';

    
    }


});
