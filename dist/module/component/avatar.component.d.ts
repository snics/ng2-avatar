import { OnChanges, OnInit } from '@angular/core';
/**
 * The main component for the avatar
 *
 * @example
 * <avatar [email]="email" [displayType]="'circle'"></avatar>
 *
 */
export declare class AvatarComponent implements OnInit, OnChanges {
    /**
     * The user email adresse for Gravatar.com
     */
    email: string;
    /**
     * The full name of the user for the avatar letter
     * @type {string}
     */
    name: string;
    /**
     * The display size
     * @type {number}
     */
    size: number;
    /**
     * Value to set a fixed color via HEX code
     * @type {string}
     */
    background: string;
    /**
     * Value to set the display type
     * @type {string} - none|circle|rounded
     */
    displayType: string;
    /**
     * Value to set a default letter
     * @type {string}
     */
    letter: string;
    /**
     * Value to set a default protocol
     * @type {string|null} - http|https
     */
    defaultProtocol: string;
    gravatarUrl: string;
    displayImage: boolean;
    fontSize: number;
    fontColor: string;
    props: any;
    constructor();
    /**
     * Randomly generates a HEX color
     * @return {string}
     */
    getRandomColor(): string;
    /**
     * Set the avatar letter based on full name or email
     */
    getLetter(): void;
    /**
     * Create a Gravatar API url
     */
    getAvatar(): void;
    setCssProps(): void;
    /**
     * Set avatar size, background and display type
     */
    ngOnInit(): void;
    /**
     * Updates avatar image and letter on email updates
     */
    ngOnChanges(): void;
}
