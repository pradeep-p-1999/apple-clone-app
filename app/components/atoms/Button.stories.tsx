

import { Meta, StoryObj } from "@storybook/react";  
import Button from "./Button";


const meta: Meta<typeof Button> = {title: "Atoms/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        varient: {
            control: 'radio',    
            options: ["primary", "secondary"],
    },}
}

export default meta

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        label: "Primary Button",
        varient: "primary",
    },
};

export const Secondary: Story = {
    args: {
        label: "Secondary Button",
        varient: "secondary",
    },
};