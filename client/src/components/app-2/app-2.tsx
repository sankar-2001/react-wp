import React from 'react';
import { Input } from '../input/input';
import { Label } from '../label/label';
import { SubmitButton } from '../submit-button/submit-button';

export interface App2Props {
    className?: string;
}




export const App2: React.FC<App2Props> = ({ className = '' }) => (
    <div className={className}>
        <form>
            <Label htmlFor="name">Name </Label>
            <Input id={'name'} name={'name'} />
            <Label htmlFor="email">Email</Label>
            <Input id={'email'} name="email" />
            <Label htmlFor="message">Message</Label>
            <Input id="message" name="message" />
        </form>
        <SubmitButton />
    </div>
);