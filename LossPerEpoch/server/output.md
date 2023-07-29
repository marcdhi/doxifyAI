# Developer's Documentation

## Introduction
This documentation provides an overview of the code and its functionality. It includes explanations of the functions, dependencies, API specs (if present), and schema tables.

## Table of Contents
1. [Function Explanations](#function-explanations)
2. [Dependencies](#dependencies)
3. [API Specs](#api-specs)
4. [Schema Tables](#schema-tables)

## Function Explanations
### Club Model
- `users`: A many-to-many field that represents the relationship between clubs and users.
- `club_name`: A character field that stores the name of the club.
- `description`: A text field that stores the description of the club.
- `logo`: An image field that stores the logo of the club.
- `__str__()`: Returns a string representation of the club.

### Item Model
- `item_name`: A character field that stores the name of the item.
- `qty`: An integer field that stores the quantity of the item.
- `club`: A foreign key that represents the relationship between items and clubs.
- `image`: An image field that stores the image of the item.
- `__str__()`: Returns a string representation of the item.

### Request Model
- `STATUS`: Choices for the status of the request.
- `requested_by`: A foreign key that represents the user who requested the item.
- `club`: A foreign key that represents the club for which the request is made.

## Dependencies
The code has the following dependencies:
- Django
- Django's `models` module
- Django's `User` model

## API Specs
Not applicable.

## Schema Tables

| Club Model   |              |
|--------------|--------------|
| Field        | Type         |
|--------------|--------------|
| users        | ManyToMany  |
| club_name    | CharField    |
| description  | TextField    |
| logo         | ImageField   |

| Item Model   |              |
|--------------|--------------|
| Field        | Type         |
|--------------|--------------|
| item_name    | CharField    |
| qty          | IntegerField |
| club         | ForeignKey   |
| image        | ImageField   |

| Request Model |              |
|---------------|--------------|
| Field         | Type         |
|---------------|--------------|
| requested_by  | ForeignKey   |
| club          | ForeignKey   |
# Code Documentation

This documentation provides an overview and explanation of the given code.

## Table of Contents
1. Introduction
2. Function Explanations
3. Dependencies
4. API Specifications (if present)
5. Schema Tables

## Introduction
The code provided defines a Django model called `ItemRequest`. This model represents a request made by a user for a specific item. It contains fields for the item, quantity, status, and date created.

## Function Explanations
The code includes a special function `__str__` that overrides the default string representation of the `ItemRequest` object. This function returns a string representation of the requested item, which includes the username of the user who made the request and the name of the item.

## Dependencies
The code relies on the following dependencies:
- Django models module

## API Specifications
No API specifications are provided in the code.

## Schema Tables

| Field Name      | Field Type    | Options                                                                 |
|-----------------|---------------|-------------------------------------------------------------------------|
| requested_by    | ForeignKey    | blank=True, null=True, on_delete=models.CASCADE                          |
| item            | ForeignKey    | null=True, on_delete=models.SET_NULL                                     |
| qty             | IntegerField  |                                                                         |
| status          | CharField     | max_length=100, null=True, choices=STATUS, default='Pending'              |
| date_created    | DateField     | auto_now_add=True                                                        |

Note: The `STATUS` choices are not defined in the provided code.
