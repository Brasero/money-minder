export default {
    label: {
        name: "label",
        label: 'Déscription de la dépense',
        type: 'text',
        rules: {
            required: true,
            minLength: 3,
            maxLength: 25
        }
    },
    amount: {
        name: 'amount',
        label: 'Montant de la dépense',
        type: 'text',
        rules: {
            required: true,
            minLength: 1,
            maxLength: 10
        }
    },
    category: {
        label: 'Catégorie de la dépense',
        name: 'category',
        type: "select",
        rules: {
            required: true
        }
    }
}