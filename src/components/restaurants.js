import React from "react";
import restaurants from '../jsonData/restaurants.json';

export default function FetchRestaurants() {
    return (   
        <div className="restaurantList">
            {/*
                Using map to loop through the restaurants array to display the data from the json file
                using dot notation
            */}
            {restaurants.map((restaurant) => 
            <div>
                <h2>{restaurant.name}</h2>
                {/* Provides feedback if the restaurant has a michelin star or not */}
                <p className="michelinStar">{restaurant.michelinStar ? "Den här restaurangen har en michelinstjärna" : "Restaurangen har inte fått någon michelinstjärna ännu"}</p>
                {/* Using dot notation with map to loop through the restaurants opening hours */}
                {restaurant.openingHours.map(hours => 
                    <div className="openingHours">
                        <h3>Openinghours</h3>
                        <p><b>Mån:</b> {hours.mon}</p>
                        <p><b>Tis:</b> {hours.tue}</p>
                        <p><b>Ons:</b> {hours.wed}</p>
                        <p><b>Tors:</b> {hours.thu}</p>
                        <p><b>Fre:</b> {hours.fri}</p>
                        <p><b>Lör:</b> {hours.sat}</p>
                        <p><b>Sön:</b> {hours.sun}</p>
                    </div>
                )}
                <h3>Meny</h3>
                {/* Checks if the restaurant has a michelin star or not - to show different menu options */}
                {restaurant.michelinStar ? (
                    restaurant.menu.map((options) => 
                        <div className="michelinMenu">
                        <p><b>{options.name}</b> - {options.price}</p>
                        <p>{options.description}</p>
                    </div>
                    )
                ) : (
                    restaurant.menu.map((options) =>
                        <div className="normalMenu">
                            {/* 
                                Prevents errors by checking if the array exist before attempting to map through it.
                                This check is required because JavaScript doesn't know in advance what 'options' contains. 
                            */}
                            {options.starters && (
                                options.starters.map((starter) =>
                                <div>
                                    <p><b>{starter.name}</b> - {starter.price} kr</p>
                                    <p>{starter.description}</p>
                                </div>
                            ))}
                            {options.mainCourse && (
                                options.mainCourse.map((main) =>
                                <div>
                                    <p><b>{main.name}</b> - {main.price} kr</p>
                                    <p>{main.description}</p>
                                </div>
                            ))}
                            {options.dessert && (
                                options.dessert.map((dess) =>
                                <div>
                                    <p><b>{dess.name}</b> - {dess.price} kr</p>
                                    <p>{dess.description}</p>
                                </div>
                            ))}
                        </div>
                    )
                )}
            </div>
            )}
        </div>
    )
};