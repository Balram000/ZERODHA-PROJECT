const {model} =require('mongoose')

 const { watchlistSchema, WatchlistSchema} =require ('../Schema/OrderSchema')

 const WacthlistModel = new model ('Watchlsit' ,WatchlistSchema)