import { __ } from '@wordpress/i18n';
export default {
    id: 'form_customization',
    priority: 2,
    name: __("Form Customization", "woocommerce-stock-manager"),
    desc: __("Adjust the appearance and layout of stock alert form.", "woocommerce-stock-manager"),
    icon: "font-file-submission",
    submitUrl: "save-stockmanager",
    modal: [
        {
            key: "separator_content",
            type: "heading",
            label: __("no_label", "woocommerce-stock-manager"),
            blocktext: __("Text Customization", "woocommerce-stock-manager"),
        },
        {
            key: "email_placeholder_text",
            type: "text",
            label: __("Email field placeholder", "woocommerce-stock-manager"),
            desc: __("Customize the text displayed inside the email input field.", "woocommerce-stock-manager"),
            placeholder: __("Enter your email", "woocommerce-stock-manager"),
        },
        {
            key: "alert_text",
            type: "textarea",
            class: "woo-setting-wpeditor-class",
            desc: __("Descriptive text guiding users on the purpose of providing their email address above the email entry field.", "woocommerce-stock-manager"),
            placeholder: __("Receive in-stock notifications for this product.", "woocommerce-stock-manager"),
            label: __("Subscription purpose description", "woocommerce-stock-manager"),
        },
        {
            key: "button_text",
            type: "text",
            label: __("Subscribe button", "woocommerce-stock-manager"),
            desc: __("Modify the subscribe button text. By default we display Notify Me.", "woocommerce-stock-manager"),
            placeholder: __("Notify Me", "woocommerce-stock-manager"),
        },
        {
            key: "unsubscribe_button_text",
            type: "text",
            label: __("Unsubscribe button", "woocommerce-stock-manager"),
            desc: __("Modify the un-subscribe button text. By default we display Unsubscribe.", "woocommerce-stock-manager"),
            placeholder: __("Unsubscribe", "woocommerce-stock-manager"),
        },
        {
            key: "separator_content",
            type: "heading",
            label: __("no_label", "woocommerce-stock-manager"),
            blocktext: __("Alert Box Customizer", "woocommerce-stock-manager"),
        },
        {
            type: "button_customizer",
            label: __("Customize button", "woocommerce-stock-manager")
        }
    ]
};
