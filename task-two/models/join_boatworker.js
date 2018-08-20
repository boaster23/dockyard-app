boat.hasMany(boat_worker, {foreignKey: 'boat_id'})
boat_worker.belongsTo(boat, {foreignKey: 'boat_id'})
