export const BASE_URL = 'https://products-crud.academlo.tech';

export const baseMessage = '!El producto ';

export const messagesAlert = {
    update: {
        title: "Actualización",
        description: baseMessage
    },
    create: {
        title: "Creación",
        description: baseMessage
    },
    delete: {
        title: "Eliminación",
        description: baseMessage
    },
    error: {
        title: "Error",
        description: "Hubo un error con tu solicitud"
    }
};

export const EXAMPLE_PRODUCT = {
    "id": 1234654687,
    "name": "Shirt",
    "category": "Technology",
    "price": "100.00",
    "isAvailable": true
};
